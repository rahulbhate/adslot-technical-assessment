const getBookings = (bookings, products, sellers) => {
  return (bookings && !bookings.length) ||
    (products && !products.length) ||
    (sellers && !sellers.length)
    ? []
    : bookings &&
        bookings
          .map((b) => {
            return {
              ...b,
              productName: products.find((p) => p.id === b.productId).name,
              rate: products.find((p) => p.id === b.productId).rate,
              cost:
                products.find((p) => p.id === b.productId).rate * b.quantity,
              sellerName: sellers.find((s) =>
                products.find(
                  (p) => p.id === b.productId && p.sellerId === s.id
                )
              ).name,
            }
          })
          .sort((b1, b2) => {
            return b1.sellerName.localeCompare(b2.sellerName)
          })
}
export default getBookings
