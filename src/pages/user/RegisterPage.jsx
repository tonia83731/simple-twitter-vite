import { OrangeBtn, LinkBtn } from "../../components/Elements/Button";
import { LandingContainer } from "../../components/Elements/Container";
import { FormInput } from "../../components/Elements/FormInput";

import { ReactComponent as ACLogoIcon } from "../../assets/acLogoIcon.svg";

import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <LandingContainer>
      <section className="mt-[50px]">
        <div className="flex flex-col items-center">
          <div className="logo">
            <ACLogoIcon />
          </div>
          <div className="text-[28px] font-bold mt-[24px]">建立你的帳號</div>
        </div>
        <div className="my-[16px]">
          <FormInput
            label="帳號"
            inputId="register-account"
            placeholder="請輸入帳號"
          ></FormInput>
          <FormInput
            label="名稱"
            inputId="register-name"
            placeholder="請輸入使用者名稱"
          ></FormInput>
          <FormInput
            label="Email"
            inputId="register-email"
            type="email"
            placeholder="請輸入Email"
          ></FormInput>
          <FormInput
            label="密碼"
            inputId="register-password"
            type="password"
            placeholder="請設定密碼"
          ></FormInput>
          <FormInput
            label="密碼再確認"
            inputId="register-password-check"
            type="password"
            placeholder="請再次輸入密碼"
          ></FormInput>
        </div>
        <OrangeBtn>註冊</OrangeBtn>
        <div className="flex justify-center mt-[16px]">
          <Link to="/login">
            <LinkBtn>取消</LinkBtn>
          </Link>
        </div>
      </section>
    </LandingContainer>
  );
}
