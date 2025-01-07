export default async function handler(req, res) {
    const projects = [
      {
        id: 1,
        title: "AI-Powered Analytics Platform",
        description: "Enterprise-level analytics solution with machine learning capabilities",
        image: "/project1.jpg",
        category: "Artificial Intelligence"
      },
      // Add more projects...
    ]
    
    res.status(200).json(projects)
  }