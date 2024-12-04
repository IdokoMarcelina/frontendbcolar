import React from 'react'
import './Circular.css'

const Circularprogress = ({ percentage, size = 100, strokeWidth = 10 }) => {
    const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Offset for the stroke-dasharray

  return (
    <svg  width={size}
    height={size}
    className="circular-progress"
    viewBox={`0 0 ${size} ${size}`}>
         {/* Background circle */}
      <circle
        className="circular-progress-bg"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      {/* Foreground circle */}
      <circle
        className="circular-progress-fg"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      {/* Text for percentage */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="circular-progress-text"
      >
        {percentage}%
      </text>


    </svg>
  )
}

export default Circularprogress