/**
 * Created by Administrator on 2018/6/6/006.
 * Message消息提示框
 */
import Message from './Message.vue'

const Msg = {};

Msg.install = (Vue) => {
  const MessageConstructor = Vue.extend(Message);
  const MessageInstance = new MessageConstructor();
  MessageInstance.$mount(document.createElement('div'));
  document.body.appendChild(MessageInstance.$el);

  Vue.prototype.$message = (msg, duration = 2000) => {
    MessageInstance.msg = msg;
    if (!MessageInstance.show) {
      MessageInstance.show = true;
      setTimeout(() => {
        MessageInstance.show = false
      }, duration)
    }
  }
};

export default Msg;
