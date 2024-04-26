import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaCreditCard, FaPlus, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="xl">
          虚拟信用卡平台
        </Heading>
        <Button leftIcon={<FaUserCircle />} colorScheme="teal" variant="solid">
          登录
        </Button>
      </Flex>
      <Stack spacing={4} as={Box} textAlign="left" py={10} px={6} boxShadow="lg" bg={useColorModeValue("white", "gray.700")} rounded="md">
        <Heading as="h2" size="lg" pb={2}>
          生成新的虚拟信用卡
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.600", "gray.200")}>
          快速安全地生成虚拟信用卡，用于在线支付和保护您的银行信息。
        </Text>
        <Flex alignItems="center">
          <Input placeholder="卡名称" mr={2} />
          <Button rightIcon={<FaPlus />} colorScheme="blue">
            生成
          </Button>
        </Flex>
      </Stack>
      <Flex justifyContent="center" mt={10}>
        <Image src="https://images.unsplash.com/photo-1528458876861-544fd1761a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwY3JlZGl0JTIwY2FyZHxlbnwwfHx8fDE3MTQxMzMwMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="md" />
      </Flex>
      <Flex justifyContent="center" mt={10} flexDirection="column" alignItems="center">
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          您的虚拟信用卡
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">卡号: **** **** **** 1234</Heading>
          <Text mt={4}>有效期: 12/25</Text>
          <Button mt={4} leftIcon={<FaCreditCard />} colorScheme="purple">
            查看详情
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
