import Link from "next/link";

const PageHeader = ({
  title,
  bgImage = "/images/breadcrumb/about-us.webp",
  breadcrumbs = null,
}) => {
  const breadcrumbItems =
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0
      ? breadcrumbs
      : [title === "404" ? "404 page not found" : title];

  return (
    <div className="tekup-breadcrumb" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <h1 className="post__title">{title}</h1>
        <nav className="breadcrumbs">
          <ul>
            <li><Link href="/">Home</Link></li>
            {breadcrumbItems.map((item, idx) => {
              if (typeof item === "string") {
                return <li key={`${item}-${idx}`}>{item}</li>;
              }

              return item?.href ? (
                <li key={`${item.label}-${idx}`}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ) : (
                <li key={`${item?.label || idx}-${idx}`}>{item?.label}</li>
              );
            })}
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default PageHeader;
