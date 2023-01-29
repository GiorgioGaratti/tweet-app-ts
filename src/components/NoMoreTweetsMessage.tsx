import { Alert, AlertDescription, AlertTitle, Box, Icon } from "@chakra-ui/react";
import { FC } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// message informing that there no more tweets to display
const NoMoreTweetsMessage: FC = () => {
    // display message or do nothing
    return (
        <Box 
            w={'md'}
            backgroundColor={"twitter.100"}
            border={'1px'}
            borderColor={'twitter.100'}
            borderRadius={'lg'}
        > 
            <Alert
                status='info'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height={"200"}
                color={"twitter.600"}
                border={'1px'}
                borderColor={'inherit'}
                borderRadius={'lg'}
            >
                <AlertTitle mt={4} mb={3} fontSize='lg'>
                    Tutti i nuovi tweet sono stati caricati...
                </AlertTitle>
                <AlertDescription maxWidth='sm' fontWeight={"semibold"}>
                    Prova a sicronizzare di nuovo
                </AlertDescription>
                <Icon as={KeyboardDoubleArrowDownIcon} boxSize='40px' marginTop={"30px"} />
            </Alert>
        </Box>
    );
};

export default NoMoreTweetsMessage;