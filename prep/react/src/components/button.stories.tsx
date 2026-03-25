// src/components/Button.stories.tsx
import React from "react"
import { Button } from "./button"

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "danger", "outline", "ghost"],
            description: "Visual style variant of the button",
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
            description: "Size of the button",
        },
        disabled: {
            control: "boolean",
            description: "Whether the button is disabled",
        },
        loading: {
            control: "boolean",
            description: "Whether the button is in loading state",
        },
        fullWidth: {
            control: "boolean",
            description: "Whether the button should take full width",
        },
        iconPosition: {
            control: "select",
            options: ["left", "right"],
            description: "Position of the icon relative to label",
        },
    },
}

export default meta

type Story = {
    args?: React.ComponentProps<typeof Button>
    render?: () => React.ReactElement
    parameters?: Record<string, unknown>
}

// Basic States
export const Primary: Story = {
    args: {
        label: "Click me",
        variant: "primary",
    },
}

export const Secondary: Story = {
    args: {
        label: "Secondary Button",
        variant: "secondary",
    },
}

export const Danger: Story = {
    args: {
        label: "Delete",
        variant: "danger",
    },
}

export const Outline: Story = {
    args: {
        label: "Outline Button",
        variant: "outline",
    },
}

export const Ghost: Story = {
    args: {
        label: "Ghost Button",
        variant: "ghost",
    },
}

// Size Variations
export const Small: Story = {
    args: {
        label: "Small Button",
        size: "small",
        variant: "primary",
    },
}

export const Medium: Story = {
    args: {
        label: "Medium Button",
        size: "medium",
        variant: "primary",
    },
}

export const Large: Story = {
    args: {
        label: "Large Button",
        size: "large",
        variant: "primary",
    },
}

// Interactive States
export const Disabled: Story = {
    args: {
        label: "Disabled Button",
        disabled: true,
        variant: "primary",
    },
}

export const Loading: Story = {
    args: {
        label: "Loading...",
        loading: true,
        variant: "primary",
    },
}

export const LoadingDisabled: Story = {
    args: {
        label: "Processing",
        loading: true,
        disabled: true,
        variant: "primary",
    },
}

// With Icons
export const WithIconLeft: Story = {
    args: {
        label: "Save",
        variant: "primary",
        icon: "💾",
        iconPosition: "left",
    },
}

export const WithIconRight: Story = {
    args: {
        label: "Next",
        variant: "primary",
        icon: "→",
        iconPosition: "right",
    },
}

// Full Width
export const FullWidth: Story = {
    args: {
        label: "Full Width Button",
        fullWidth: true,
        variant: "primary",
    },
    parameters: {
        layout: "padded",
    },
}

// All Variants Showcase
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Danger" variant="danger" />
            <Button label="Outline" variant="outline" />
            <Button label="Ghost" variant="ghost" />
        </div>
    ),
}

// All Sizes Showcase
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Button label="Small" size="small" variant="primary" />
            <Button label="Medium" size="medium" variant="primary" />
            <Button label="Large" size="large" variant="primary" />
        </div>
    ),
}

// Interactive Example
export const Interactive: Story = {
    args: {
        label: "Click me!",
        variant: "primary",
        onClick: () => {
            alert("Button clicked!")
        },
    },
}

// State Combinations
export const StateCombinations: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button label="Normal" variant="primary" />
                <Button label="Disabled" variant="primary" disabled />
                <Button label="Loading" variant="primary" loading />
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button label="Small" size="small" variant="secondary" />
                <Button label="Medium" size="medium" variant="secondary" />
                <Button label="Large" size="large" variant="secondary" />
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button label="With Icon" variant="danger" icon="🗑️" iconPosition="left" />
                <Button label="Full Width" variant="outline" fullWidth />
            </div>
        </div>
    ),
    parameters: {
        layout: "padded",
    },
}

