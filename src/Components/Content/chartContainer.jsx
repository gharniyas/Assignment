import '../../styles/Layout.css'

const ChartContainer=({headerContent,children})=>{
    return <div className="chart-container">
        <header className='chart-container-header'>{headerContent}</header>
        <div className="chart-container-body">{children}</div>
    </div>
}

export default ChartContainer