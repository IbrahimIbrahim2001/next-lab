import Link from "next/link"

export default function InstructionsLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="w-full  max-w-3xl mx-auto">
            {children}


            <div className="space-y-4 py-4">
                <div className="rounded-lg border p-4 text-sm text-muted-foreground">
                    <p>
                        This setup will be packaged soon into reusable modules, so you won’t need to copy files manually.
                    </p>
                </div>

                {/* Back link */}
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
                >
                    ← Back
                </Link>
            </div>
        </main>
    )

}