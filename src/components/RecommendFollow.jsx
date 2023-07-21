import RecommendFollowItem from "./RecommendFollowItem";

export default function RecommendFollow(){
  return (
    <section id="recommend-follow" className="bg-grayscale-20 rounded-2xl">
      <div className="text-2xl font-bold py-6 pl-6 border-b">推薦跟隨</div>
      <div>
        <RecommendFollowItem />
        <RecommendFollowItem />
      </div>
    </section>
  );
}