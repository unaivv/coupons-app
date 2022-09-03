import {
	Avatar,
	Card,
	Container,
	Grid,
	Row,
	Text,
	Col,
	Button,
} from "@nextui-org/react"
import type { NextPage } from "next"
import Head from "next/head"

const list = [
	{
		title: "50%b discount in your oranges",
		img: "/images/fruit-1.jpeg",
		price: "-50%",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam nisl.",
	},
	{
		title: "Free the secon orange",
		img: "/images/fruit-2.jpeg",
		price: "FREE",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam nisl.",
	},
	{
		title: "1kg Rasperry by 1€",
		img: "/images/fruit-3.jpeg",
		price: "1.00$",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam nisl.",
	},
	{
		title: "2 beers by 2€",
		img: "/images/fruit-4.jpeg",
		price: "$2.00",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam nisl.",
	},
	{
		title: "Advocato",
		img: "/images/fruit-5.jpeg",
		price: "$15.70",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam nisl.",
	},
	{
		title: "Lemon 2",
		img: "/images/fruit-6.jpeg",
		price: "$8.00",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam nisl.",
	},
	{
		title: "Banana",
		img: "/images/fruit-7.jpeg",
		price: "$7.50",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam nisl.",
	},
	{
		title: "Watermelon",
		img: "/images/fruit-8.jpeg",
		price: "$12.20",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Sed euismod, nunc ut aliquam ultrices, nunc nisl aliquam nisl.",
	},
]

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Coupon App</title>
				<meta name="description" content="Coupon App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<h1>Coupon App</h1>
				<h2>Get your coupons to get discount in your city</h2>
				<Grid.Container gap={2} justify="flex-start">
					{list.map((item, index) => (
						<Grid xs={12} sm={4} key={index}>
							<Card css={{ w: "100%", h: "400px" }}>
								<Card.Header
									css={{
										position: "absolute",
										zIndex: 1,
										top: 5,
									}}
								>
									<Col>
										<Text
											size={48}
											weight="bold"
											transform="uppercase"
											color="#ffffff"
											css={{
												textShadow:
													"2px 2px 10px #0005",
											}}
										>
											{item.price}
										</Text>
										<Text
											h4
											color="white"
											css={{
												textShadow:
													"2px 2px 10px #0005",
											}}
										>
											{item.title}
										</Text>
									</Col>
								</Card.Header>
								<Card.Body css={{ p: 0 }}>
									<Card.Image
										src={"https://nextui.org" + item.img}
										objectFit="cover"
										width="100%"
										height="100%"
										alt={`${item.title} background`}
									/>
								</Card.Body>
								<Card.Footer
									isBlurred
									css={{
										position: "absolute",
										bgBlur: "#0f111466",
										borderTop:
											"$borderWeights$light solid $gray800",
										bottom: 0,
										zIndex: 1,
									}}
								>
									<Grid.Container gap={2} justify="center">
										<Grid xs={12} sm={9}>
											<Row>
												<Col span={1.5}>
													<Card.Image
														src="https://nextui.org/images/breathing-app-icon.jpeg"
														css={{
															bg: "black",
															br: "50%",
														}}
														height={40}
														width={40}
														alt="Breathing app icon"
													/>
												</Col>
												<Col>
													{item.description
														.split("\n ")
														.map((paragraph) => (
															<Text
																color="#d1d1d1"
																size={12}
																css={{
																	marginLeft:
																		"10px",
																}}
															>
																{paragraph}
															</Text>
														))}
												</Col>
											</Row>
										</Grid>
										<Grid xs={12} sm={3}>
											<Row justify="flex-end">
												<Button
													flat
													auto
													rounded
													css={{
														color: "#94f9f0",
														bg: "#94f9f026",
													}}
												>
													<Text
														css={{
															color: "inherit",
														}}
														size={12}
														weight="bold"
														transform="uppercase"
													>
														Get Coupon
													</Text>
												</Button>
											</Row>
										</Grid>
									</Grid.Container>
								</Card.Footer>
							</Card>
						</Grid>
					))}
				</Grid.Container>
			</Container>
		</div>
	)
}

export default Home
