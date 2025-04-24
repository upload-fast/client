<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import * as Card from '$lib/components/ui/card';
    import {AlertTriangle} from 'lucide-svelte';
</script>

<svelte:head>
    <title>UploadFast | Verification Error</title>
</svelte:head>

<div class="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4">
    <Card.Root class="w-full max-w-md">
        <Card.Header class="space-y-1">
            <div class="flex justify-center">
                <AlertTriangle class="h-16 w-16 text-amber-500" />
            </div>
            <Card.Title class="text-center text-2xl">Verification Failed</Card.Title>
            <Card.Description class="text-center">
                We couldn't verify your email. The verification link may have expired or is invalid.
            </Card.Description>
        </Card.Header>
        <Card.Content class="flex flex-col items-center">
            <p class="mb-4 text-center text-sm text-muted-foreground">
                Please try logging in to request a new verification link.
            </p>
            <Button href="/login" class="mt-4">
                Go to Login
            </Button>
        </Card.Content>
    </Card.Root>
</div>