// app/instructions/themes/page.tsx
"use client";

import { useTranslations } from "next-intl";
import { CodeBlock } from "@/components/ui/code-block";

export default function ThemeInstructionPage() {
    const t = useTranslations("ThemeInstructionPage");

    return (
        <div className="flex justify-center py-6">
            <div className="space-y-8 max-w-3xl w-full">

                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        {t("title")}
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        {t("description")}
                    </p>
                </div>

                {/* Steps */}
                <div className="rounded-xl border bg-card p-6">
                    <ol className="space-y-6 text-sm">

                        {/* Step 1 */}
                        <li className="space-y-2">
                            <p className="font-medium">
                                1. {t("steps.addDefinitions.title")}
                            </p>

                            <p className="text-muted-foreground">
                                {t.rich("steps.addDefinitions.description", {
                                    code: (chunks) => (
                                        <code className="font-mono text-xs">
                                            {chunks}
                                        </code>
                                    ),
                                })}
                            </p>
                        </li>

                        {/* Step 2 */}
                        <li className="space-y-2">
                            <p className="font-medium">
                                2. {t("steps.providers.title")}
                            </p>

                            <p className="text-muted-foreground">
                                {t.rich("steps.providers.description", {
                                    code: (chunks) => (
                                        <code className="font-mono text-xs">
                                            {chunks}
                                        </code>
                                    ),
                                })}
                            </p>

                            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                                <li>
                                    <code className="font-mono text-xs">
                                        theme-provider.tsx
                                    </code>
                                </li>

                                <li>
                                    <code className="font-mono text-xs">
                                        active-theme.tsx
                                    </code>
                                </li>

                                <li>
                                    <code className="font-mono text-xs">
                                        theme-selector.tsx
                                    </code>
                                </li>

                                <li>
                                    <code className="font-mono text-xs">
                                        select-theme-dropdown.tsx
                                    </code>
                                </li>
                            </ul>
                        </li>

                        {/* Step 3 */}
                        <li className="space-y-2">
                            <p className="font-medium">
                                3. {t("steps.wrap.title")}
                            </p>

                            <p className="text-muted-foreground">
                                {t("steps.wrap.description")}
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
                            <p className="font-medium">
                                4. {t("steps.selector.title")}
                            </p>

                            <p className="text-muted-foreground">
                                {t.rich("steps.selector.description", {
                                    code: (chunks) => (
                                        <code className="font-mono text-xs">
                                            {chunks}
                                        </code>
                                    ),
                                })}
                            </p>
                        </li>

                    </ol>
                </div>
            </div>
        </div>
    );
}