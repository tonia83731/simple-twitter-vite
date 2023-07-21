import { ReactComponent as LikeIcon } from "../assets/likeIcon.svg";
import { ReactComponent as LikeFilledIcon } from "../assets/likeFilledIcon.svg";
import { ReactComponent as ReplyIcon } from "../assets/replyIcon.svg";



export default function TweetItem(){
  return (
    <div className="flex px-6 py-4 border-b">
      <img
        src="https://picsum.photos/200/200?grayscale"
        alt=""
        className="rounded-full w-[50px]  h-[50px]"
      />
      <div className="ml-2">
        <div className="flex items-center">
          <div className="font-bold">Name</div>
          <div className="text-sm text-secondary ml-2">
            <span>@account</span>
            <span> &#8226; </span>
            <span>3小時</span>
          </div>
        </div>
        <p className="text-sm py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a enim dapibus, mattis tellus non, fringilla sapien. Mauris posuere
          augue.
        </p>
        <div className="flex">
          <button className="flex items-center">
            <span className="like-icon">
              <LikeIcon />
            </span>
            <span className="text-sm ml-2">10</span>
          </button>
          <button className="flex items-center ml-10">
            <span className="reply-icon">
              <ReplyIcon />
            </span>
            <span className="text-sm ml-2">10</span>
          </button>
        </div>
      </div>
    </div>
  );
}