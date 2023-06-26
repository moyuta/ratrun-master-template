<template>
  <div class="login">
    <p>ログイン</p>
    <form>
      <BasicInput
        type="email"
        name="email"
        :value="user.email"
        @inputValue="handleInput($event)"
        class="basic-input"
      />
      <BasicInput
        type="password"
        name="password"
        :value="user.password"
        @inputValue="handleInput($event)"
        class="basic-input"
      />
      <BasicButton @clickSubmit="handleClickSubmit" text="同意して新規登録する" class="basic-button" />
    </form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { BasicInput } from "@/components/atoms/Inputs";
import { BasicButton } from "@/components/atoms/Buttons";
import { postLogin } from '@/api/user'

const user = reactive({
  email: "",
  password: "",
});
const handleInput = (data: { name: 'email'|'password'; value: string }) => {
  user[data.name] = data.value;
};
const handleClickSubmit = async() => {
  try{
    const res = postLogin(user);
    alert(`こんにちは。${user.email}さん。top画面へ遷移します。`)
    // ログインに成功しました
  }catch{
    alert('ログインに失敗しました。画面を確認ください')
  }
  
};
</script>

<style lang="scss">
.login{
  padding: 100px;
  @include mobile {
    padding: 50px;
  }
}
form{
  text-align: center;
}
.basic-input{
  margin: 30px auto;
}
</style>