import { BoxProps } from "@chakra-ui/react";
import { IProfile } from "../shared-types";

interface DashboardProps extends BoxProps{
    profile: IProfile | null;
}

export function Dashboard({profile}: DashboardProps){


    return (
        <p>
            {profile?.displayName}
        </p>
    )
}