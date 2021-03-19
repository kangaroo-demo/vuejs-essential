export default {
    bind(el, binding, Vnode) {
        el.style.position = 'fixed'
        var s = (binding.arg == 'left' ? 'left' : 'top')
        el.style[s] = binding.value + 'px'
    }
}