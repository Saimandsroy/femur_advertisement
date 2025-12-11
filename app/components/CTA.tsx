import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your Workflow?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of teams already using StreamLine to boost their productivity.
        </p>
        <a href="https://cal.com/femurstudio/30min" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="secondary">
            Start Your Free Trial
          </Button>
        </a>
      </div>
    </section>
  )
}
