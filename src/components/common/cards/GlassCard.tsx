const GlassCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative h-full">
            {/* Liquid glass effect frame - backdrop blur creates the frosted glass effect */}
            <div
                className="relative rounded-xl p-8 h-full"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent brownish-grey tint
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default GlassCard;