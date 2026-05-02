import { CodeBlock } from "@/components/ui/code-block";
export default function ThemeInstructionPage() {
    return (
        <div className="flex justify-center py-6">
            <div className="space-y-8">

                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Theme Setup
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Add a customizable theme system to your project. This setup allows dynamic theme switching using CSS variables and context.
                    </p>
                </div>

                {/* Steps */}
                <div className="rounded-xl border bg-card p-6">
                    <ol className="space-y-6 text-sm">

                        {/* Step 1 */}
                        <li className="space-y-2">
                            <p className="font-medium">1. Add theme definitions</p>
                            <p className="text-muted-foreground">
                                Copy <code className="font-mono text-xs">themes.ts</code> into your <code className="font-mono text-xs">/lib</code> folder.
                                This file contains all theme tokens and utilities.
                            </p>
                        </li>

                        {/* Step 2 */}
                        <li className="space-y-2">
                            <p className="font-medium">2. Add theme providers</p>
                            <p className="text-muted-foreground">
                                Copy the following files into your <code className="font-mono text-xs">/components</code> directory:
                            </p>

                            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                                <li><code className="font-mono text-xs">theme-provider.tsx</code></li>
                                <li><code className="font-mono text-xs">active-theme.tsx</code></li>
                                <li><code className="font-mono text-xs">theme-selector.tsx</code></li>
                                <li><code className="font-mono text-xs">select-theme-dropdown.tsx</code></li>
                            </ul>
                        </li>

                        {/* Step 3 */}
                        <li className="space-y-2">
                            <p className="font-medium">3. Wrap your application</p>
                            <p className="text-muted-foreground">
                                In your root layout, wrap your app with both providers:
                            </p>
                        </li>
                        <CodeBlock
                            language="tsx"
                            code={`<ThemeProvider>
  <ActiveThemeProvider>
    <ThemeSelector />
    {children}
  </ActiveThemeProvider>
</ThemeProvider>`}
                        />
                        {/* Step 4 */}
                        <li className="space-y-2">
                            <p className="font-medium">4. Use the theme selector</p>
                            <p className="text-muted-foreground">
                                Place the <code className="font-mono text-xs">ThemeSelector</code> anywhere in your UI to allow users to switch themes.
                            </p>
                        </li>

                    </ol>
                </div>
            </div>
        </div>
    );
}