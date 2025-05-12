import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Camera, Image, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ProblemDetailProps {
  id: string;
  title: string;
  description: string;
  difficulty?: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  constraints?: string;
  hints?: string[];
  sampleSolution?: string;
  testCases?: Array<{
    input: any;
    expected: any;
  }>;
}

const ProblemDetail = ({
  id,
  title,
  description,
  difficulty,
  examples,
  constraints,
  hints,
  sampleSolution,
  testCases,
}: ProblemDetailProps) => {
  const [solution, setSolution] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
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

      // If we have test cases, try to evaluate the solution
      if (testCases && testCases.length > 0) {
        try {
          // Create a function from the solution code
          // This is a simplified approach - in a real app, you'd use a secure sandbox
          const userFunction = new Function('return ' + solution)();

          // Check if the function passes all test cases
          const results = testCases.map((testCase, index) => {
            try {
              const output = userFunction(testCase.input);
              const passed = JSON.stringify(output) === JSON.stringify(testCase.expected);
              return { passed, index };
            } catch (error) {
              return { passed: false, index, error: error.message };
            }
          });

          const failedTests = results.filter(r => !r.passed);

          if (failedTests.length === 0) {
            toast({
              title: "Success!",
              description: `Your solution passed all ${testCases.length} test cases.`,
              className: "success-gradient",
            });
          } else {
            toast({
              variant: "destructive",
              title: "Test cases failed",
              description: `Your solution failed on ${failedTests.length} test case(s).`,
              className: "error-gradient",
            });
          }
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error occurred",
            description: `Could not evaluate your solution: ${error.message}`,
            className: "error-gradient",
          });
        }
      } else {
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
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error occurred",
        description: "Failed to submit your solution. Please try again.",
        className: "error-gradient",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
          <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
          {difficulty && (
            <span className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${difficulty === "Easy" ? "bg-green-100 text-green-800" :
              difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              }`}>
              {difficulty}
            </span>
          )}
        </div>
        <p className="text-gray-600 whitespace-pre-line text-sm sm:text-base">{description}</p>
      </div>

      {constraints && (
        <div>
          <h2 className="text-base sm:text-lg font-semibold">Constraints</h2>
          <p className="text-gray-600 whitespace-pre-line text-sm sm:text-base">{constraints}</p>
        </div>
      )}

      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-base sm:text-lg font-semibold">Examples</h2>
        {examples.map((example, index) => (
          <div
            key={index}
            className="border border-learning-border rounded-lg p-3 sm:p-4 bg-learning-card text-sm sm:text-base"
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

      {hints && hints.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-base sm:text-lg font-semibold">Hints</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base">
            {hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-semibold">Your Solution</h2>
          {sampleSolution && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSolution(!showSolution)}
              className="text-xs sm:text-sm"
            >
              {showSolution ? "Hide Solution" : "Show Solution"}
            </Button>
          )}
        </div>
        {showSolution && sampleSolution && (
          <div className="border border-learning-border rounded-lg p-3 sm:p-4 bg-gray-50 mb-3 sm:mb-4">
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Sample Solution</h3>
            <pre className="bg-gray-100 p-2 sm:p-3 rounded overflow-x-auto text-xs sm:text-sm">
              <code>{sampleSolution}</code>
            </pre>
          </div>
        )}
        <Textarea
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          placeholder="Write your code solution here..."
          className="min-h-[150px] sm:min-h-[200px] font-mono text-sm"
        />
      </div>

      {image && (
        <div className="border border-learning-border rounded-lg p-2 overflow-hidden">
          <img
            src={image}
            alt="Uploaded solution"
            className="w-full h-36 sm:h-48 object-cover rounded"
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:space-x-3">
        <Button
          variant="outline"
          className="w-full sm:flex-1 text-xs sm:text-sm py-1 h-9"
          onClick={handleImageUpload}
        >
          <Image className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Gallery
        </Button>
        <Button
          variant="outline"
          className="w-full sm:flex-1 text-xs sm:text-sm py-1 h-9"
          onClick={handleCameraCapture}
        >
          <Camera className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Camera
        </Button>
        <Button
          className="w-full sm:flex-1 blue-gradient text-xs sm:text-sm py-1 h-9"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          <Send className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          {isSubmitting ? "Submitting..." : "Submit Solution"}
        </Button>
      </div>

      {/* OCR Instructions - Shown when there's no solution yet */}
      {!solution && !image && (
        <div className="border border-learning-border rounded-lg p-3 sm:p-4 bg-learning-card">
          <h3 className="font-semibold mb-2 text-sm sm:text-base">How to Use OCR in This App</h3>
          <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
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
