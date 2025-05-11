
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Camera, Image, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ProblemDetailProps {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
}

const ProblemDetail = ({
  id,
  title,
  description,
  examples,
}: ProblemDetailProps) => {
  const [solution, setSolution] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = () => {
    // In a real app, this would open a file picker
    // Here we'll just simulate choosing an image
    setImage("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop");
    toast({
      title: "Image uploaded",
      description: "Your image has been processed.",
    });
  };

  const handleCameraCapture = () => {
    // Simulate camera capture
    setImage("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop");
    toast({
      title: "Image captured",
      description: "Your image has been processed.",
    });
  };

  const handleSubmit = async () => {
    if (!solution.trim()) {
      toast({
        variant: "destructive",
        title: "Empty solution",
        description: "Please provide a solution before submitting.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Randomly succeed or fail to demonstrate both scenarios
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        toast({
          title: "Success!",
          description: "Your solution has been submitted successfully.",
          className: "success-gradient",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error occurred",
          description: "The code has a syntax error on line 6.",
          className: "error-gradient",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 whitespace-pre-line">{description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Examples</h2>
        {examples.map((example, index) => (
          <div 
            key={index} 
            className="border border-learning-border rounded-lg p-4 bg-learning-card"
          >
            <div className="mb-2">
              <span className="font-medium">Input:</span> {example.input}
            </div>
            <div className="mb-2">
              <span className="font-medium">Output:</span> {example.output}
            </div>
            {example.explanation && (
              <div>
                <span className="font-medium">Explanation:</span> {example.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Your Solution</h2>
        <Textarea
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          placeholder="Write your code solution here..."
          className="min-h-[200px] font-mono"
        />
      </div>

      {image && (
        <div className="border border-learning-border rounded-lg p-2 overflow-hidden">
          <img 
            src={image} 
            alt="Uploaded solution" 
            className="w-full h-48 object-cover rounded"
          />
        </div>
      )}

      <div className="flex items-center space-x-3">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={handleImageUpload}
        >
          <Image className="mr-2 h-4 w-4" />
          Gallery
        </Button>
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={handleCameraCapture}
        >
          <Camera className="mr-2 h-4 w-4" />
          Camera
        </Button>
        <Button 
          className="flex-1 blue-gradient"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Submitting..." : "Submit Solution"}
        </Button>
      </div>

      {/* OCR Instructions - Shown when there's no solution yet */}
      {!solution && !image && (
        <div className="border border-learning-border rounded-lg p-4 bg-learning-card">
          <h3 className="font-semibold mb-2">How to Use OCR in This App</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Write your problem solution clearly on a paper</li>
            <li>Capture a photo of the paper or upload an image</li>
            <li>The app will scan the image and convert text to digital format</li>
            <li>Solve the problem after it appears in the app</li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default ProblemDetail;
