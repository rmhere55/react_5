import React, { useState } from 'react'
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import ReactPlayer from 'react-player'

const Video = () => {
    const videoArr = [
        'https://www.youtube.com/watch?v=R3HNAILVd70',
        'https://www.youtube.com/watch?v=3UdBvAEkuXk',
        'https://www.youtube.com/watch?v=R3HNAILVd70',
        'https://www.youtube.com/shorts/IeMpsd0fTsY',
        'https://www.youtube.com/watch?v=WlYJZqXkrl4',
        'https://www.youtube.com/watch?v=5CvAGZ_yPFs',
        'https://www.youtube.com/watch?v=3UdBvAEkuXk',
        'https://www.youtube.com/watch?v=R3HNAILVd70'
    ]

    const [videoSrc, setVideoSrc] = useState(videoArr[0])

    return (
        <Stack direction={['column', 'row']} h={'100vh'} p={4} spacing={8}>
            <VStack w={'full'} spacing={4} p={4}>
                <ReactPlayer 
                    url={videoSrc} 
                    controls
                    width='100%'
                    height={'65%'}
                    style={{
                        marginTop: '20px', // Adds margin at the top of the video player
                        padding: '10px',   // Adds padding around the video player
                    }}
                />
                <VStack alignItems={'flex-start'} p={4} w={'full'} overflow={'auto'}>
                    <Heading>Sample Video</Heading>
                    <Text>
                        This is a sample video for testing and demo. This is called a description. 
                        You can shorten or customize this text as needed.
                    </Text>
                </VStack>
            </VStack>
            <VStack 
                w={['full', 'xxl']} 
                alignItems={'stretch'} 
                p={4} 
                mt={4} // Adds margin at the top of the lecture buttons
                spacing={4} // Adds space between lecture buttons
                overflow={'auto'}
            >
                {videoArr.map((item, index) => (
                    <Button 
                        key={index}
                        variant={'ghost'} 
                        colorScheme={'purple'} 
                        onClick={() => setVideoSrc(item)}
                    >
                        Lecture {index + 1}
                    </Button>
                ))}
            </VStack>
        </Stack>
    )
}

export default Video
