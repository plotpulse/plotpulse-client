import { ButtonProps } from "@chakra-ui/react";
import { IStar } from "../shared-types";

interface StarButtonProps extends ButtonProps {
    promptId: number;
    stars: IStar[];
}

export function StarButton(){

}