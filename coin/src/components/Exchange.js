import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Container, Heading, HStack, VStack, Image, Text } from '@chakra-ui/react';
import Loading from './Loader';
import ErrorComponet from './ErrorComponent';

const Exchange = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching exchanges:", error);
                setError(true)
                setLoading(false);
            }
        };
        
        fetchExchanges();
    }, []);

    if(error) return <ErrorComponet message={"error while fetching Exchanges "}/>
    return (
        <Container maxW={'container.xl'}>
            {loading ? <Loading /> : (
                <HStack wrap={'wrap'} justifyContent={'center'}>
                    {exchanges.map((exchange) => (
                        <ExchangeCard
                            key={exchange.id}
                            name={exchange.name}
                            img={exchange.image}
                            rank={exchange.trust_score_rank}
                            url={exchange.url}
                        />
                    ))}
                </HStack>
            )}
        </Container>
    );
};

const ExchangeCard = ({ name, img, rank, url }) => {
    return (
        <a href={url} target='_blank' rel='noopener noreferrer'>
            <VStack
                w={'52'}
                shadow={'lg'}
                p={'8'}
                borderRadius={'lg'}
                transition={'all 0.3s'}
                m={'4'}
                css={{
                    "&:hover": {
                        transform: 'scale(1.1)'
                    },
                }}>
                <Image src={img} alt="Exchange" boxSize={'100px'} objectFit={'contain'} />
                <Heading size={'md'} noOfLines={1}>{rank}</Heading>
                <Text noOfLines={1}>{name}</Text>
            </VStack>
        </a>
    );
};

export default Exchange;
