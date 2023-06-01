const Price = ({price}) => {
    return (
        <p>
            {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(price)}
        </p>
    )
}

export default Price