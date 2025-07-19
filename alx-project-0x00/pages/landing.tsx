import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Small Rounded" style={{ fontSize: '0.8rem', padding: '4px 8px' }} className="rounded-sm" />
            <Button title="Medium Rounded" style={{ fontSize: '1rem', padding: '8px 16px' }} className="rounded-md" />
            <Button title="Large Rounded" style={{ fontSize: '1.2rem', padding: '12px 24px' }} className="rounded-full" />
        </div>
    )
}

export default Landing;