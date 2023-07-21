import { OrangeBtn, OrangeBorderBtn } from "./Elements/Button";

export default function RecommendFollowItem({ isFollowed }) {
  return (
    <div className="flex p-4">
      <img
        src="https://picsum.photos/200/200?grayscale"
        alt=""
        className="rounded-full w-[50px]  h-[50px]"
      />
      <div className="w-20 pl-2 pr-0.5">
        <div className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          Bank Of America
        </div>
        <div className="text-sm text-grayscale-70 text-ellipsis whitespace-nowrap overflow-hidden">
          @bankofamerica
        </div>
      </div>
      {isFollowed ? (
        <OrangeBtn>正在跟隨</OrangeBtn>
      ) : (
        <OrangeBorderBtn>跟隨</OrangeBorderBtn>
      )}
    </div>
  );
}
