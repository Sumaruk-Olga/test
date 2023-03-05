import { Avatar } from "components/Avatar/Avatar"
import { FoneImage } from "components/FoneImage/FoneImage"
import { Logo } from "components/Logo/Logo"
import { Statistics } from "components/Statistics/Statistics"
import { Article } from "./Tweet.styled"

export const Tweet = () => {
    return <Article>
        <Logo/>
        <FoneImage/>
        <Avatar/>
        <Statistics/>
    </Article>
}