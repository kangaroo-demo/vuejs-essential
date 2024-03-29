<template>
  <div class="col-md-9 left-col pull-right">
    <div class="panel article-body content-body">
      <h1 class="text-center">{{ title }}</h1>
      <div class="article-meta text-center">
        <i class="fa fa-clock-o"></i>
        <abbr>{{ date | moment('from') }}</abbr>
      </div>
      <div class="entry-content">
        <div class="content-body entry-content panel-body ">
          <div class="markdown-body" v-html="content"></div>

          <div v-if="auth && uid === 1" class="panel-footer operate">
            <div class="actions">
              <a @click="deleteArticle" class="admin" href="javascript:;"><i class="fa fa-trash-o"></i></a>
              <a @click="editArticle" class="admin" href="javascript:;"><i class="fa fa-pencil-square-o"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 点赞 -->
    <div class="votes-container panel panel-default padding-md">
      <div class="panel-body vote-box text-center">
        <div class="btn-group">
          <a @click="like" href="javascript:;" class="vote btn btn-primary popover-with-html" :class="likeClass">
            <i class="fa fa-thumbs-up"></i> {{ likeClass ? '已赞' : '点赞' }}
          </a>
          <div class="or"></div>
          <button @click="showQrcode = true" class="btn btn-success"><i class="fa fa-heart"></i> 打赏</button>
        </div>
        <div class="voted-users">
          <div class="user-lists">
            <span v-for="likeUser in likeUsers">
              <!-- 点赞用户是当前用户时，加上类 animated 和 swing 以显示一个特别的动画  -->
              <router-link :to="`/${likeUser.uname}`" :src="likeUser.uavatar" tag="img" class="img-thumbnail avatar avatar-middle" :class="{ 'animated swing' : likeUser.uid === 1 }"></router-link> 
            </span>
          </div>
          <div v-if="!likeUsers.length" class="vote-hint">成为第一个点赞的人吧 ?</div>
        </div>
      </div>
    </div>
    <!-- 打赏弹窗 -->
    <Modal :show.sync="showQrcode" class="text-center">
      <template v-slot:header>
        <div v-if="user">
          <img :src="user.avatar" class="img-thumbnail avatar" width="48">
        </div>
      </template>
      <div>
        <p class="text-md">如果你想学习更多前端的知识，Learnku Vue.js.com 是个不错的开始</p>
        <div class="payment-qrcode inline-block">
          <h5>扫一扫打开 Learnku Vue.js.com</h5>
          <p>
            <qrcode-vue value="https://learnku.com/vuejs/" :size="160">
            </qrcode-vue>
          </p>
        </div>
      </div>
      <template v-slot:footer>
        <div>
          <div class="text-center">祝你学习愉快 :)</div>
        </div>
      </template>
    </Modal>

    <!-- 评论列表 -->
    <div class="replies panel panel-default list-panel replies-index">
      <div class="panel-heading">
        <div class="total">
          回复数量: <b>{{ comments.length }}</b>
        </div>
      </div>
      <div class="panel-body">
        <transition-group id="reply-list" class="list-group row">
          <li v-for="(comment, index) in comments" :key="comment.commentId" class="list-group-item media">
            <div class="avatar avatar-container pull-left">
              <router-link :to="`/${comment.uname}`">
                <img :src="comment.uavatar" class="media-object img-thumbnail avatar avatar-middle">
              </router-link>
            </div>
            <div class="infos">
              <div class="media-heading">
                <router-link :to="`/${comment.uname}`" class="remove-padding-left author rm-link-color">
                  {{ comment.uname }}
                </router-link>
                <!-- 编辑删除图标 -->
                <span v-if="auth" class="operate pull-right">
                  <span v-if="comment.uid === 1">
                    <a href="javascript:;" @click="editComment(comment.commentId, index)"><i class="fa fa-edit"></i></a>
                    <span> ⋅ </span>
                    <a href="javascript:;" @click="deleteComment(comment.commentId)"><i class="fa fa-trash-o"></i></a>
                  </span>
                </span>
                <div class="meta">
                  <a :id="`reply${index + 1}`" :href="`#reply${index + 1}`" class="anchor">#{{ index + 1 }}</a>
                  <span> ⋅ </span>
                  <abbr class="timeago">
                    {{ comment.date | moment('from', { startOf: 'second' }) }}
                  </abbr>
                </div>
              </div>

              <div class="preview media-body markdown-reply markdown-body" v-html="comment.content"></div>
            </div>
          </li>
        </transition-group>
        <div v-show="!comments.length" class="empty-block">
          暂无评论~~
        </div>
      </div>
    </div>

    <!-- 评论框 -->
    <div id="reply-box" class="reply-box form box-block">
      <div class="form-group comment-editor">
        <textarea v-if="auth" id="editor"></textarea>
        <textarea v-else disabled class="form-control" placeholder="需要登录后才能发表评论." style="height:172px"></textarea>
      </div>
      <div class="form-group reply-post-submit">
        <button id="reply-btn" :disabled="!auth" @click="comment" class="btn btn-primary">
          {{ commentId ? '保存编辑' : '回复' }}
        </button>
        <span v-show="commentId" class="help-inline btn-cancel" style="cursor:pointer" @click="cancelEditComment">取消编辑</span>
        <span v-show="!commentId" class="help-inline">Ctrl+Enter</span>
      </div>
      <div v-show="commentHtml" id="preview-box" class="box preview markdown-body" v-html="commentHtml"></div>
    </div>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde'
import hljs from 'highlight.js'
import emoji from 'node-emoji'
import { mapState } from 'vuex'
// 引入 qrcode.vue 的默认值
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'Content',
  components: {
    QrcodeVue
  },
  data() {
    return {
      title: '', // 文章标题
      content: '', // 文章内容
      date: '', // 创建时间
      uid: 1, // 用户 ID
      likeUsers: [], // 点赞用户列表
      likeClass: '', // 点赞样式,
      showQrcode: false, // 是否显示打赏弹窗
      commentHtml: '', // 评论 HTML
      comments: [], // 评论列表
      commentId: undefined, // 评论ID
    }
  },
  computed: {
      ...mapState([
          'auth',
          'user'
      ])
  },
  created() {
    const articleId = this.$route.params.articleId
    const article = this.$store.getters.getArticleById(articleId)
    if (article) {
      let {uid, title, content, date, likeUsers, comments } = article

      this.title = title
      this.content = SimpleMDE.prototype.markdown(emoji.emojify(content, name => name))
      this.date = date
      this.uid = uid
      this.likeUsers = likeUsers || []
      this.likeClass = this.likeUsers.some(likeUser => likeUser.uid === 1) ? 'active':''
      // 渲染文章的 comments
      this.renderComments(comments)
      this.$nextTick(() => {
        this.$el.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightBlock(el)
        })
      })
    }
    this.articleId = articleId
  },
  mounted() {
    // 已登录时，才开始创建
    if (this.auth) {
      // 自动高亮编辑器的内容
      window.hljs = hljs

      const simplemde = new SimpleMDE({
        element: document.querySelector('#editor'),
        placeHolder: '请使用 Markdown 格式书写 ;-)，代码片段黏贴时请注意使用高亮语法。',
        spellChecker: false,
        autoDownloadFontAwesome: false,
        // 不显示工具栏
        toolbar: false,
        // 不显示状态栏
        status: false,
        renderingConfig: {
          codeSyntaxHighlighting: true
        }
      })

      // 内容改变监听
      simplemde.codemirror.on('change', () => {
        // 更新 commentMarkdown 为编辑器的内容
        this.commentMarkdown = simplemde.value()
        // 更新 commentHtml，我们先替换原内容中的 emoji 标识，然后使用 markdown 方法将内容转成 HTML
        this.commentHtml = simplemde.markdown(emoji.emojify(this.commentMarkdown, name => name))
      })

      // 按键松开监听
      simplemde.codemirror.on('keyup', (codemirror, event) => {
        // 使用 Ctrl+Enter 时提交评论
        if (event.ctrlKey && event.keyCode === 13) {
          this.comment()
        } else if (this.commentId && event.keyCode === 27) {
          // 存在 commentId，且按下 esc 键时
          // 取消编辑评论
          this.cancelEditComment()
        }
      })

      // 将编辑器添加到当前实例
      this.simplemde = simplemde
    }
  },
  methods: {
      editArticle() {
          // 点击编辑文章图标，跳到编辑文章页面，并附带当前文章 ID
          this.$router.push({name: 'Edit', params: {articleId: this.articleId} })
      },
      deleteArticle() {
        // 删除文章
      },
      // 点赞操作
      like(e) {
        if (!this.auth) {
          this.$swal({
            text: '需要登录以后才能执行此操作。',
            confirmButtonText: '前往登录'
          }).then((res) => {
            if (res.value) {
              this.$router.push('/auth/login')
            }
          })
        } else {
          const target = e.currentTarget
          // 点赞按钮是否含有 active 类，我们用它来判断是否已赞
          const active = target.classList.contains('active')
          const articleId = this.articleId

          if (active) {
            // 如果已经点赞
            // 清楚点赞样式
            this.likeClass = ''
            // 分发 like 事件取消赞，更新实例的 likeUsers 为返回的值
            this.$store.dispatch('like', {articleId}).then((likeUsers) => {
            this.likeUsers = this.recompute('likeUsers')
            })
          } else {
            // 添加已赞样式
            this.likeClass = 'active animate__animated animate__rubberBand'
            // 分发 like 事件，传入 isAdd 参数点赞，更新实例的 likeUsers 为返回的值
            this.$store.dispatch('like', {articleId,isAdd: true}).then((likeUsers)=>{
            this.likeUsers = this.recompute('likeUsers')
            })
          }
        }
      },
      renderComments(comments){
        if (Array.isArray(comments)) {
          comments = this.recompute('comments')
          const newComments = comments.map(comment => ({ ...comment }))
          const user = this.user || {}

          for (let comment of newComments) {
            // 将评论内容从 Markdown 转成 HTML
            comment.content = SimpleMDE.prototype.markdown(emoji.emojify(comment.content, name => name))
          }

          // 更新实例的 comments
          this.comments = newComments
          // 将 Markdown 格式的评论添加到当前实例
          this.commentsMarkdown = comments
        }
      },
      // 添加评论
      comment() {
        // 编辑器的内容不为空时
        if (this.commentMarkdown && this.commentMarkdown.trim() !== '') {
          // 分发 comment 事件以提交评论
          this.$store.dispatch('comment', {
            comment: { content: this.commentMarkdown },
            articleId: this.articleId,
            commentId: this.commentId
          }).then(this.renderComments)

          if (this.commentId) {
            // 有 commentId 时, 取消编辑评论
            this.cancelEditComment()
          } else {
            // 清空编辑器
            this.simplemde.value('')
            // 使回复按钮获得焦点
            document.querySelector('#reply-btn').focus()
            // 将最后的评论滚动到页面的顶部
            this.$nextTick(() => {
              const lastComment = document.querySelector('#reply-list li:last-child')
              if (lastComment) lastComment.scrollIntoView(true)
            })
          }
        }
      },
      // 编辑评论
      editComment(commentId, commentIndex) {
        // 编辑器
        const simplemde = this.simplemde
        // 编辑器
        const codemirror = simplemde.codemirror
        // Markdown 格式的所有评论
        const comments = this.commentsMarkdown

        for (const comment of comments) {
          // 找到与 commentId 对应的评论时
          if (+comment.commentId === +commentId) {
            // 设置编辑器的内容
            simplemde.value(comment.content)
            // 使编辑器获得焦点
            codemirror.focus()
            // 将光标移到内容的后面
            codemirror.setCursor(codemirror.lineCount(), 0)
            // 评论索引 +1， 用来指示页面滚动的位置
            this.commentIndex = commentIndex + 1
            // 更新 commentId
            this.commentId = commentId
            break
          }
        }
      },
      // 取消编辑评论
      cancelEditComment() {
        // 清除 commentId
        this.commentId = undefined
        // 清空编辑器
        this.simplemde.value('')

        // 下次 DOM 更新后，将评论滚动会视图的顶部
        this.$nextTick(() => {
          if (this.commentIndex === undefined) return
          const currentComment = document.querySelector(`#reply-list li:nth-child(${this.commentIndex})`)

          if (currentComment) {
            currentComment.scrollIntoView(true)
            currentComment.querySelector('.operate a').focus()
          }
        })
      },
      // 删除评论
      deleteComment(commentId) {
        this.$swal({
          text: '你确定要删除此评论吗？',
          confirmButtonText: '删除'
        }).then((res) => {
          if (res.value) {
            // 此时不用传入 comment
            this.$store.dispatch('comment', {
              commentId,
              articleId: this.articleId
            }).then(this.renderComments)
            this.cancelEditComment()
          }
        })
      },
      // 返回带用户信息的文章的某项属性
      recompute(key) {
        const articleId = this.$route.params.articleId
        // 这里的文章是基于 getters.computedArticles 的，所以包含用户信息了
        const article = this.$store.getters.getArticleById(articleId)
        let arr

        if (article) {
          arr = article[key]
        }

        return arr || []
      }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .5s;}
.fade-enter, .fade-leave-to { opacity: 0;}
</style>