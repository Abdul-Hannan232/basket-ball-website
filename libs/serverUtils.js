export async function getServerSideProps(context) {
  const { pathname } = context.resolvedUrl; // Get the current path from the context

  return {
    props: {
      pathname,  // Pass pathname to the layout component
    },
  };
}