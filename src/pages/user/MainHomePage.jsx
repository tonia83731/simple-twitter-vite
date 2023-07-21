import TweetList from "../../components/TweetList"
import RecommendFollow from "../../components/RecommendFollow"
import { OrangeBtn } from "../../components/Elements/Button";



export default function MainHomePage() {
  return (
    <section id="main" className="tablet:grid tablet:grid-cols-12 tablet:gap-6">
      <div className="col-start-3 col-span-7 tablet:border-x">
        <div className="text-2xl font-bold py-6 pl-6 border-b">首頁</div>
        <div className="py-4 px-6 border-b-[10px]">
          <div className="flex items-center mb-3.5">
            <img
              src="https://picsum.photos/200/200?grayscale"
              alt=""
              className="rounded-full w-[50px]  h-[50px]"
            />
            <div className="text-lg font-bold pl-2">有什麼新鮮事?</div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-16 flex justify-end">
              <OrangeBtn>推文</OrangeBtn>
            </div>
          </div>
        </div>
        <TweetList />
      </div>
      <div className="col-start-10 col-span-3">
        <RecommendFollow />
      </div>
    </section>
  );
}
