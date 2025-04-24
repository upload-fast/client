<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import * as Card from '$lib/components/ui/card';
    import {CheckCircle} from 'lucide-svelte';
</script>

<svelte:head>
    <title>UploadFast | Email Verified</title>
</svelte:head>

<div class="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4">
    <Card.Root class="w-full max-w-md">
        <Card.Header class="space-y-1">
            <div class="flex justify-center">
                <CheckCircle class="h-16 w-16 text-emerald-500" />
            </div>
            <Card.Title class="text-center text-2xl">Email Verified!</Card.Title>
            <Card.Description class="text-center">
                Your email has been successfully verified. You can now access all features of UploadFast.
            </Card.Description>
        </Card.Header>
        <Card.Content class="flex flex-col items-center">
            <p class="mb-4 text-center text-sm text-muted-foreground">
                Thank you for verifying your email address. You're all set to use UploadFast.
            </p>
            <Button href="/dashboard" class="mt-4">
                Go to Dashboard
            </Button>
        </Card.Content>
    </Card.Root>
</div>