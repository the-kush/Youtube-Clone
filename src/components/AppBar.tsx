import { SearchBar } from "./SearchBar"
import { SignIn } from "./SignIn"
import { Youtube } from "./Youtube"

export const AppBar = () => {
    return <div className="flex justify-between p-2">
        <div>
            <Youtube />
        </div>

        <div>
            <SearchBar />
        </div>

        <div>
            <SignIn />
        </div>
    </div>
}