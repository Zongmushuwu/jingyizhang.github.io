import React from "react";
import { Submission } from "../../data/submissions";

export default function SubmissionPage({ publication }: { publication: Submission }) {
    return (
        <div className="bg-white py-20">
            <div className="mx-auto max-w-4xl px-8">
                <div className="mb-12">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <p className="text-lg font-normal" style={{color: '#898989'}}>{publication.venue}</p>
                        <span className="inline-flex self-start flex-shrink-0 items-center rounded-md bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 shadow-sm">Under review</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">{publication.title}</h1>
                    <div className="space-y-3 mb-6">
                        <p className="text-lg font-normal" style={{color: '#898989'}}>
                            {publication.authors.map((author, index) => (
                                <React.Fragment key={author}>
                                    {index > 0 && ", "}
                                    <span className={author === "Jingyi Zhang" ? "font-bold" : undefined}>{author}</span>
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">ABSTRACT</h2>
                    <p className="text-lg leading-relaxed text-gray-700 font-normal">{publication.abstract}</p>
                </div>

            </div>
        </div>
    );
}
