import Link from "next/link"

type ResultLinkProps = {
    slug: string;
    id: string;
    linkName: string;
    linkType: string
}

export default function ResultLink({slug, id, linkName, linkType}: ResultLinkProps) {
    return (
        <Link href={`/${linkType}/${slug}`}>
            <li key={id} className="hover:bg-gray-100">{linkName}</li>
        </Link>
    )
}