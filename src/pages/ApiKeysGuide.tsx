import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Key, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Code,
  Server,
  Shield,
  Users,
  Zap
} from "lucide-react";

const ApiKeysGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Key className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              API Keys & Secrets: A Founder's Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about API keys, secrets, and how to use them safely in your startup
            </p>
          </div>

          {/* What is an API Key */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5" />
                What is an API Key?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Think of an API key like a special password that allows your app to talk to other services. 
                Just like how you need a key to enter your house, your app needs an API key to access services 
                like payment processing (Stripe), email sending (SendGrid), or AI features (OpenAI).
              </p>
              
              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                <p className="font-medium mb-2">Real-world analogy:</p>
                <p className="text-sm text-muted-foreground">
                  An API key is like a hotel room key card. It identifies who you are, gives you access to specific 
                  services (your room, gym, pool), and can be deactivated if lost or stolen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    What API keys enable:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                    <li>• Process payments</li>
                    <li>• Send emails automatically</li>
                    <li>• Use AI features</li>
                    <li>• Access maps and location data</li>
                    <li>• Integrate social media</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500" />
                    What they're NOT:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                    <li>• User passwords</li>
                    <li>• Credit card numbers</li>
                    <li>• Personal information</li>
                    <li>• Something users see</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Types of API Keys */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Types of API Keys & Secrets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Eye className="w-4 h-4 text-blue-500" />
                      Public Keys
                    </h4>
                    <Badge variant="secondary">Safe to expose</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    These can be visible in your website's code. They identify your app but can't be used to steal money or data.
                  </p>
                  <div className="bg-muted/30 p-3 rounded text-xs font-mono">
                    pk_test_51H7... (Stripe publishable key)
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <EyeOff className="w-4 h-4 text-red-500" />
                      Secret Keys
                    </h4>
                    <Badge variant="destructive">Must be hidden</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    These have full access to your account. If someone gets these, they can charge customers, access data, or worse.
                  </p>
                  <div className="bg-red-50 p-3 rounded text-xs font-mono border border-red-200">
                    sk_live_51H7... (Stripe secret key) ⚠️
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Use API Keys */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                How to Use API Keys Properly
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Get your keys from the service</h4>
                    <p className="text-sm text-muted-foreground">
                      Sign up for the service (Stripe, OpenAI, etc.) and find their "API Keys" or "Developer" section.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Store them securely</h4>
                    <p className="text-sm text-muted-foreground">
                      Never put secret keys directly in your code. Use environment variables or secure storage services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Use them in your backend</h4>
                    <p className="text-sm text-muted-foreground">
                      Secret keys should only be used on your server, never in the browser where users can see them.
                    </p>
                  </div>
                </div>
              </div>

              <Alert>
                <Server className="w-4 h-4" />
                <AlertTitle>Frontend vs Backend</AlertTitle>
                <AlertDescription>
                  <strong>Frontend (browser):</strong> Only use public keys here. Users can see this code.
                  <br />
                  <strong>Backend (server):</strong> This is where secret keys live. Users can't access this.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Common Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert variant="destructive">
                  <XCircle className="w-4 h-4" />
                  <AlertTitle>Never put secret keys in your frontend code</AlertTitle>
                  <AlertDescription>
                    If you can see it in your browser's "view source", so can hackers. This is the #1 security mistake.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <XCircle className="w-4 h-4" />
                  <AlertTitle>Don't commit keys to GitHub</AlertTitle>
                  <AlertDescription>
                    Once it's in your code repository, it's potentially visible to anyone. Use .env files and .gitignore.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <XCircle className="w-4 h-4" />
                  <AlertTitle>Don't share keys in Slack or email</AlertTitle>
                  <AlertDescription>
                    These platforms aren't secure for sensitive information. Use proper secret management tools.
                  </AlertDescription>
                </Alert>

                <Alert>
                  <CheckCircle className="w-4 h-4" />
                  <AlertTitle>Use test keys during development</AlertTitle>
                  <AlertDescription>
                    Most services provide test keys that don't charge real money. Always start with these.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Real Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Real-World Examples
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">$</span>
                    </div>
                    <h4 className="font-semibold">Stripe (Payments)</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Public key:</span> 
                      <code className="ml-2 bg-muted px-2 py-1 rounded">pk_test_...</code>
                      <span className="ml-2 text-green-600">✓ Safe in frontend</span>
                    </div>
                    <div>
                      <span className="font-medium">Secret key:</span> 
                      <code className="ml-2 bg-red-50 px-2 py-1 rounded border border-red-200">sk_live_...</code>
                      <span className="ml-2 text-red-600">⚠️ Backend only</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">AI</span>
                    </div>
                    <h4 className="font-semibold">OpenAI (ChatGPT API)</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">API key:</span> 
                      <code className="ml-2 bg-red-50 px-2 py-1 rounded border border-red-200">sk-...</code>
                      <span className="ml-2 text-red-600">⚠️ Always secret</span>
                    </div>
                    <p className="text-muted-foreground">
                      All OpenAI keys are secret because they're tied to your billing account.
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">📧</span>
                    </div>
                    <h4 className="font-semibold">SendGrid (Email)</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">API key:</span> 
                      <code className="ml-2 bg-red-50 px-2 py-1 rounded border border-red-200">SG....</code>
                      <span className="ml-2 text-red-600">⚠️ Backend only</span>
                    </div>
                    <p className="text-muted-foreground">
                      Can send emails on your behalf, so must be kept secret.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Best Practices for Founders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-green-800">Use a proper backend service</h5>
                    <p className="text-sm text-green-700">
                      Services like Supabase, Firebase, or AWS handle secret storage for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-green-800">Rotate keys regularly</h5>
                    <p className="text-sm text-green-700">
                      Change your API keys every few months, especially if team members leave.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-green-800">Monitor usage</h5>
                    <p className="text-sm text-green-700">
                      Most services show you API usage. Watch for unexpected spikes that might indicate misuse.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-green-800">Train your team</h5>
                    <p className="text-sm text-green-700">
                      Make sure developers understand which keys are public vs. secret.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Questions to Ask Your Developer */}
          <Card>
            <CardHeader>
              <CardTitle>Questions to Ask Your Developer</CardTitle>
              <CardDescription>
                Use these questions to ensure your team is handling API keys correctly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium">"Where are you storing our secret API keys?"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Good answer: "In environment variables" or "In our backend service's secret manager"
                  </p>
                </div>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium">"Can users see any of our API keys in the browser?"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Good answer: "Only public keys, never secret ones"
                  </p>
                </div>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium">"Are we using test keys for development?"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Good answer: "Yes, and we only switch to live keys for production"
                  </p>
                </div>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium">"What happens if someone gets our secret keys?"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Good answer: "We can immediately revoke them and generate new ones"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  API keys are like special passwords that let your app use other services
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Public keys can be visible, secret keys must be hidden
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Secret keys should only live on your backend/server
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Use proper secret management tools, not hardcoded values
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Monitor usage and rotate keys regularly
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApiKeysGuide;
