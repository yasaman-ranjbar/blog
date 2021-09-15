import {state} from "~/store";

export default (context) => {
  // console.log(context.store.state)
  if (context.store.state.user.name !== 'mohamad'){
    return context.redirect('/')
  }
}
