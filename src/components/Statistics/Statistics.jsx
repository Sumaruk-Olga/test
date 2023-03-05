import { useDispatch, useSelector } from "react-redux";
import { updateClicks } from "redux/clicksSlice";
import { updateFollowers } from "redux/followersSlice";
import { getClicksValue, selectFollowersValue } from "redux/selectors";
import { Wrapper, Item, Info, Button } from "./Statistics.styled";

export const Statistics = ()=>{
    const tweetNumber = 777;
    const followwersNumber = useSelector(selectFollowersValue);
    const isfollow = useSelector(getClicksValue);
    const dispatch = useDispatch();
    const followersNumberToShow = new Intl.NumberFormat("en-IN").format(followwersNumber);
    const btnText = isfollow ? 'following' : 'follow';

    const handleClick = ()=> {
        dispatch(updateClicks());
        isfollow ? dispatch(updateFollowers(-1)) : dispatch(updateFollowers(1));
    }
    return <Wrapper>
    <Info>
        <Item>{tweetNumber} TWEET</Item>
        <Item>{followersNumberToShow} Followers</Item>
    </Info>
    <Button type='button' onClick={handleClick} style={{backgroundColor: isfollow ? "#5CD3A8" : "#EBD8FF"}}>{btnText}</Button>
    </Wrapper>
}
