/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

interface item {
    href: string,
    label: string
}

const NavItem: React.FC<item> = ({ href, label }) => (
    <Link href={href}>
        <a className="nav-link">{label}</a>
    </Link>
)

export default NavItem