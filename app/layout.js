"use client";

import { Suspense } from "react";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import { AppHeader, AppFooter } from "components";
import { theme, navigationHeight, footerHeight } from "util/theme-config";
import Loading from "./loading";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<ChakraProvider theme={theme}>
					<AppHeader />

					<Container maxW="container.xl">
						<Box as="main" minHeight={`calc(100vh - ${navigationHeight}px - ${footerHeight}px)`}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</Box>
						<AppFooter />
					</Container>
				</ChakraProvider>
			</body>
		</html>
	);
}
