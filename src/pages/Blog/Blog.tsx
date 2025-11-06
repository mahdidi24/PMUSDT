import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  useTheme,
  Container,
} from "@mui/material";

function BlogPage() {
  const theme = useTheme();

  const posts = [
    {
      title: "How to Buy Cryptocurrency Safely",
      image: "https://weex-prod-cms.s3.ap-northeast-1.amazonaws.com/medium_8_24c0c1197f.png",
      excerpt:
        "Learn step-by-step how to buy your first cryptocurrency securely and avoid common beginner mistakes.",
    },
    {
      title: "Guide: Transfer USDT to Perfect Money",
      image: "https://images.ctfassets.net/34qk4sbev8wo/1GSUJv6KkUwt98CLul87R4/0df47ba4191f9d62a92a37ecafb9371c/231013_Blog_What_Is_Tether__USDT_.jpg?fm=webp&w=1200&q=60",
      excerpt:
        "A complete guide on how to transfer your USDT (Tether) to a Perfect Money account in under 5 minutes.",
    },
    {
      title: "5 Essential Tips for New Traders",
      image: "https://07x.net/wp-content/uploads/2024/10/crypto_trading_or_trader_db003772-a166-41b2-ad2c-df2d0034c05c.png",
      excerpt:
        "If you're new to crypto trading, these five tips will help you stay safe and make smarter moves.",
    },
  ];

  return (
    <Container sx={{ py: 6 }}>
     
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
        >
          Our Blog
        </Typography>
        <Typography sx={{ color: theme.palette.text.secondary, mt: 1 }}>
          Latest guides, insights, and updates from the crypto world
        </Typography>
      </Box>

    
      <Stack spacing={4}>
        {posts.map((post, i) => (
          <Card
            key={i}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              bgcolor: theme.palette.background.paper,
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: { sm: 240 }, height: { xs: 200, sm: "auto" } }}
              image={post.image}
              alt={post.title}
            />
            <CardContent
              sx={{
                flex: 1,
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {post.title}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 2,
                  fontSize: "0.9rem",
                }}
              >
                {post.excerpt}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  alignSelf: "flex-start",
                  borderRadius: "10px",
                  px: 3,
                  py: 0.8,
                  bgcolor: "#40A578",
                  "&:hover": { bgcolor: "#369665" },
                }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default BlogPage;
