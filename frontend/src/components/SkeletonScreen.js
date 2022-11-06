import React from 'react'

function SkeletonScreen() {
  return (
    <>
        <div className="card skeleton">
            <div className='skeleton-content'></div>
            <div className='skeleton-content'></div>
        </div>
        <div className="card skeleton">
            <div className='skeleton-content'></div>
            <div className='skeleton-content'></div>
        </div>
        <div className="card skeleton">
            <div className='skeleton-content'></div>
            <div className='skeleton-content'></div>
        </div>
        <div className="card skeleton">
            <div className='skeleton-content'></div>
            <div className='skeleton-content'></div>
        </div>
    </>
  )
}

export default SkeletonScreen