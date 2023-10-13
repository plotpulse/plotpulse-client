import { useState } from "react";
import { IProfile } from "../shared-types";
import { createProfile } from "../utilities/auth-services";

interface Props {
    email: string;
}


export function SignUpForm({ email }: Props) {

    const [profileForm, setProfileForm] = useState<IProfile>({
        id: email,
        genres: [],
        bio: "",
    })

    async function handleSubmit() {

        try {
            const profileResponse = await createProfile(profileForm)

            if (profileResponse.id === email) {
                // navigate("/profile")
                window.location.reload()
            } else {
                throw new Error("There was an issue creating your profile.")
            }

        } catch (error) {
            console.log(error)
            //do something in the UI
        }
    }

    return (
        <p>
            Create a form for the user to fill in their profile details
        </p>
    )
}