import { useDispatch, useSelector } from "react-redux";
import { updateClicks } from "redux/clicksSlice";
import { updateFollowers } from "redux/followersSlice";
import { getClicksValue, selectFollowersValue } from "redux/selectors";

export const Statistics = ()=>{
    const tweetNumber = 777;
    const followwersNumber = useSelector(selectFollowersValue);
    const isfollow = useSelector(getClicksValue);
    const dispatch = useDispatch();

    const btnText = isfollow ? 'following' : 'follow';

    const handleClick = ()=> {
        dispatch(updateClicks());
        isfollow ? dispatch(updateFollowers(-1)) : dispatch(updateFollowers(1));
    }
    return <>
    <p>{tweetNumber} TWEET</p>
    <p>
        <span>{followwersNumber}</span>
        Followers
    </p>
    <button type='button' onClick={handleClick}>{btnText}</button>
    </>
}