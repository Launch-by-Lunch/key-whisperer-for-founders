
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Key, Shield, Book } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Founder's Tech Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential technical knowledge for non-technical founders building digital products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/api-keys-guide')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">API Keys & Secrets</CardTitle>
              <CardDescription>
                Learn what API keys are, how they work, and how to use them securely
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow opacity-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-xl">Security Best Practices</CardTitle>
              <CardDescription>
                Coming soon: Essential security practices for your startup
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow opacity-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-xl">Tech Stack Basics</CardTitle>
              <CardDescription>
                Coming soon: Understanding databases, servers, and infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
