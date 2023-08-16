<template>
  <div class="registration">
    <p>新規登録</p>
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
      <BasicButton @clickSubmit="handleClickSubmit" />
    </form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { BasicInput } from "@/components/atoms/Inputs";
import { BasicButton } from "@/components/atoms/Buttons";
import { postRegistration } from "@/api/user";

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
});
const handleInput = (data: { name: "email" | "password"; value: string }) => {
  user[data.name] = data.value;
};
const handleClickSubmit = async () => {
  try {
    const res = await postRegistration(user);
    alert("新規登録に成功しました。画面を遷移します。");
    router.push("/login");
  } catch (error) {
    //
    alert("新規登録に失敗しました。");
  }
};
</script>

<style lang="scss">
.registration {
  padding: 100px;
  @include mobile {
    padding: 50px;
  }
}
form {
  text-align: center;
}
.basic-input {
  margin: 30px auto;
}
</style>
