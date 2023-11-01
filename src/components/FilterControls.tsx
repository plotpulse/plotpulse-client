import { Heading, Box, useColorModeValue, BoxProps, Button, VStack, Flex } from "@chakra-ui/react"

import { GenreFilterButton } from "."
import { ALL_GENRES } from "../constants"
import { Dispatch, SetStateAction } from "react";

interface FilterControlsProps extends BoxProps {
    handleFilter: (newFilter: string) => void;
    filters: string[];
    setFilters: Dispatch<SetStateAction<string[]>>;
}


export function FilterControls({ handleFilter, filters, setFilters, ...otherProps }: FilterControlsProps) {
    const borderValue = useColorModeValue('background.100', 'background.800')

    return (

        <Box mx={2} borderLeftWidth={3} borderColor={borderValue} h={'80vh'} display={'flex'} flexDirection={"column"} p={4} gap={2} {...otherProps}>
            <Heading size={['xs', null, 'sm']}>Filter by genre</Heading>
            <Button onClick={() => setFilters(ALL_GENRES)}>Clear Filters</Button>
            <Flex direction="row" wrap={"wrap"} gap={1}>
                {ALL_GENRES.map((genre, idx) => {

                    return (
                        <GenreFilterButton key={idx} genre={genre} handleFilter={handleFilter} filters={filters} />
                    )
                })}


            </Flex>

        </Box>
    )
}