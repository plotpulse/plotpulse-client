import { Button, ButtonProps } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface GenreFilterButtonProps extends ButtonProps {
    genre: string;
    handleFilter: (newFilter: string) => void;
    filters: string[]
}

export function GenreFilterButton({genre, handleFilter, filters}: GenreFilterButtonProps) {
    const [isActive, setIsActive] = useState(filters.includes(genre))

    

    function handleClick() {
        handleFilter(genre)
    }

    useEffect(() => {setIsActive(filters.includes(genre))}, [filters])

    return (
        <Button variant={isActive ? 'brandPrimary' : 'ghost'} onClick={handleClick} size={'sm'}>
            {genre.toUpperCase()}
        </Button>
    )

}