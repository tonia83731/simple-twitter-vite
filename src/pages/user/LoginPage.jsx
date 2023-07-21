import { OrangeBtn, LinkBtn } from "../../components/Elements/Button";
import { LandingContainer } from "../../components/Elements/Container";
import { FormInput } from "../../components/Elements/FormInput";

import { ReactComponent as ACLogoIcon } from "../../assets/acLogoIcon.svg";

import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <LandingContainer>
      <section className="mt-[50px]">
        <div className="flex flex-col items-center">
          <div className="logo">
            <ACLogoIcon />
          </div>
          <div className="text-[28px] font-bold mt-[24px]">登入Alphitter</div>
        </div>
        <div className="my-[16px]">
          <FormInput
            label="帳號"
            inputId="login-account"
            placeholder="請輸入帳號"
          ></FormInput>
          <FormInput
            label="密碼"
            inputId="login-password"
            type="password"
            placeholder="請輸入密碼"
          ></FormInput>
        </div>
        <OrangeBtn>登入</OrangeBtn>
        <div className="flex justify-end mt-[16px]">
          <Link to="/regist">
            <LinkBtn>註冊</LinkBtn>
          </Link>
          <p className="px-[12px]">&#8226;</p>

          <Link to="/adminlogin">
            <LinkBtn>後臺登入</LinkBtn>
          </Link>
        </div>
      </section>
    </LandingContainer>
  );
}
