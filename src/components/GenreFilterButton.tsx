import { Button, ButtonProps } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

interface GenreFilterButtonProps extends ButtonProps {
    genre: string;
    handleFilter: (newFilter: string) => void;
}

export function GenreFilterButton({genre, handleFilter}: GenreFilterButtonProps) {
    const [isActive, setIsActive] = useState(true)

    function handleClick() {
        setIsActive(!isActive)
        handleFilter(genre)
    }

    return (
        <Button variant={isActive ? 'brandPrimary' : 'ghost'} onClick={handleClick} size={'sm'}>
            {genre.toUpperCase()}
        </Button>
    )

}